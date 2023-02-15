import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import { AiFillFire } from "react-icons/ai";

const SingleRecipeInfo = () => {
  const recipe = useSelector((state) => state.recipeInfo.recipeInfo);
  const [recipeData, setRecipeData] = useState(null);
  const summary = recipeData?.summary;
  const strippedText = summary?.replace(/(<([^>]+)>)/gi, "");

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipe}/information?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}`
      );
      const recipeData = response.data;
      setRecipeData(recipeData);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(recipeData, "ppp");

  if (recipeData) {
    return (
      <div className="single-recipe" style={{ height: "100vh" }}>
        <div className="inner flex">
          <div className="left w-60 flex flex-col  px-10"></div>

          <div
            className="right w-40 bg-white flex flex-col items-center px-20"
            style={{
              boxShadow: "  0px 0px 16px -2px rgba(189,189,189,0.75",
              height: "100vh",
            }}
          >
            <div
              className="relative"
              style={{ height: "430px", width: "100%" }}
            >
              <Image
                src={recipeData.image}
                layout="fill"
                objectPosition="center"
                alt="Food Image"
              />
            </div>

            <div className="flex flex-col gap-y-3  py-5">
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
        </div>
      </div>
    );
  }
};

export default SingleRecipeInfo;
