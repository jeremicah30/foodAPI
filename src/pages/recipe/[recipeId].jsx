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

  useEffect(() => {
    getRecipe();
  }, []);

  console.log(recipeData, "ppp");

  if (recipeData) {
    return (
      <div className="sinlgle-recipe h-full py-24">
        <div className="inner flex">
          <div className="left w-30">
            <div className="h-40">
              <Image
                src={recipeData.image}
                width={500}
                height={500}
                alt="Food Image"
              />
            </div>
          </div>

          <div className="right w-60 grid gap-y-3">
            {recipeData.veryPopular === true ? (
              <p className=" bg-red-500 text-white w-fit px-2 py-1 rounded-md font-semibold">
                🔥 POPULAR
              </p>
            ) : null}
            <ul className="flex">
              {Array.isArray(recipeData.dishTypes)
                ? recipeData.dishTypes.map((r, i) => {
                    return (
                      <li
                        key={i}
                        className="rounded-full border border-orange-200 text-center py-1 px-2 mr-2"
                      >
                        {r}
                      </li>
                    );
                  })
                : null}
            </ul>

            <p className="text-3xl">{recipeData.title}</p>
            <p className="text-3xl">{strippedText}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleRecipeInfo;
