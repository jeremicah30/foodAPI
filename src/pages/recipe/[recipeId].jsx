import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";

const SingleRecipeInfo = () => {
  const recipe = useSelector((state) => state.recipeInfo.recipeInfo);
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const [openTab, setOpenTab] = React.useState(1);
  const summary = recipeData?.summary;
  const ingredients = recipeData?.extendedIngredients;
  const instructions = recipeData?.analyzedInstructions;
  const strippedText = summary?.replace(/(<([^>]+)>)/gi, "");

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipe}/information?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}`
      );
      const recipeData = response.data;
      setRecipeData(recipeData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(recipeData, "ppp");

  if (recipeData) {
    return (
      <>
        {!loading && (
          <div className="single-recipe " style={{ height: "100vh" }}>
            <div className="container">
              <div
                className="inner bg-white py-10 my-10 rounded-md"
                style={{
                  boxShadow: "  0px 0px 16px -2px rgba(189,189,189,0.75",
                }}
              >
                <div className="left w-full bg-white flex  items-center px-20 pb-10">
                  <div className="w-40">
                    <Image
                      src={recipeData.image}
                      width={550}
                      height={550}
                      alt="Food Image"
                    />
                  </div>

                  <div className="flex flex-col gap-y-1  py-5 w-50">
                    {recipeData.veryPopular === true ? (
                      <p className=" bg-red-500 text-white w-fit px-2 py-1 rounded-md font-semibold">
                        🔥 POPULAR
                      </p>
                    ) : null}
                    <ul className="flex flex-wrap ">
                      {Array.isArray(recipeData.dishTypes)
                        ? recipeData.dishTypes.map((r, i) => {
                            return (
                              <li
                                key={i}
                                className="rounded-full border border-orange-200 text-center py-1 px-2 mr-2 mb-2"
                              >
                                {r}
                              </li>
                            );
                          })
                        : null}
                    </ul>

                    <h2 style={{ fontSize: "42px", fontFamily: "math, serif" }}>
                      {recipeData.title}
                    </h2>
                    <p>{strippedText}</p>
                  </div>
                </div>

                <div className="right w-full flex flex-col  px-10 ">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                      >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                              (openTab === 1
                                ? "text-white bg-orange-400"
                                : "text-orange-500 bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            Ingredients
                          </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                              (openTab === 2
                                ? "text-white bg-orange-400"
                                : "text-orange-500 bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                          >
                            Instruction
                          </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                              (openTab === 3
                                ? "text-white bg-orange-400"
                                : "text-orange-500 bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                          >
                            INFO
                          </a>
                        </li>
                      </ul>
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                          <div className="tab-content tab-space">
                            <div
                              className={openTab === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <h2 className="pb-5">{`Ingredients in making ${recipeData.title}:`}</h2>

                              <ol className="list-disc px-10">
                                {ingredients.map((i, index) => (
                                  <li key={index}>{i.original}</li>
                                ))}
                              </ol>
                            </div>
                            <div
                              className={openTab === 2 ? "block" : "hidden"}
                              id="link2"
                            >
                              <h2 className="pb-5">{`Steps in making ${recipeData.title}:`}</h2>

                              {instructions.map((i, index) => (
                                <div key={index}>
                                  <h2>{i.name}</h2>
                                  <ol className="list-decimal px-10">
                                    {i.steps.map((s, index) => (
                                      <li key={index}>{s.step}</li>
                                    ))}
                                  </ol>
                                </div>
                              ))}
                            </div>
                            <div
                              className={openTab === 3 ? "block" : "hidden"}
                              id="link3"
                            >
                              <p>
                                Efficiently unleash cross-media information
                                without cross-media value. Quickly maximize
                                timely deliverables for real-time schemas.
                                <br />
                                <br /> Dramatically maintain clicks-and-mortar
                                solutions without functional solutions.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div>
            <p>Helllloooo</p>
          </div>
        )}
      </>
    );
  }
};

export default SingleRecipeInfo;
