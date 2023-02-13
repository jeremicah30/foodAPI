import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setFoodType } from "../Redux/foodType";
import getRecipeInformation from "@/datas/getRecipeInformation";
import { getRecipeInfo } from "@/Redux/recipeInfo";

const Tabs = () => {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const menuItems = useSelector((state) => state.foodMenu.menuItems);
  const foodData = menuItems.results;

  const handleFoodTypeChange = (type) => {
    dispatch(setFoodType(type));
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  handleFoodTypeChange("pasta");
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Pasta
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  handleFoodTypeChange("burger");
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Burger
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                  handleFoodTypeChange("cake");
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Cake
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                  handleFoodTypeChange("salad");
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Salad
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                  handleFoodTypeChange("fruit");
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Fruits
              </Link>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <Link
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-blueGray-600"
                    : "text-blueGray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                  handleFoodTypeChange("vegetable");
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Veggie
              </Link>
            </li>
          </ul>
          <div className="relative min-w-0 break-words mb-6 shadow-lg rounded">
            <div className="px-4 py-5 grid gap-4 grid-cols-4 ">
              {Array.isArray(foodData)
                ? foodData.map((f) => {
                    return (
                      <div className="tab-content tab-space" key={f.id}>
                        <div
                          className={openTab === 1 ? "block " : "hidden"}
                          id="link1"
                        >
                          <ul>
                            <li>
                              <Link href={`/recipe/${f.id}`}>
                                <Image
                                  src={f.image}
                                  width={400}
                                  height={400}
                                  alt="Food Image"
                                  onClick={() => {
                                    getRecipeInformation(f.id);
                                    dispatch(getRecipeInfo(f.id));
                                  }}
                                  className="cursor-pointer"
                                />
                                <p>{f.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={openTab === 2 ? "block" : "hidden"}
                          id="link2"
                        >
                          <ul>
                            <li>
                              <Link href={`/recipe/${f.id}`}>
                                <Image
                                  src={f.image}
                                  width={400}
                                  height={400}
                                  alt="Food Image"
                                  onClick={() => {
                                    getRecipeInformation(f.id);
                                  }}
                                  className="cursor-pointer"
                                />
                                <p>{f.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={openTab === 3 ? "block" : "hidden"}
                          id="link3"
                        >
                          <ul>
                            <li>
                              <Link href={`/recipe/${f.id}`}>
                                <Image
                                  src={f.image}
                                  width={400}
                                  height={400}
                                  alt="Food Image"
                                  onClick={() => {
                                    getRecipeInformation(f.id);
                                  }}
                                  className="cursor-pointer"
                                />
                                <p>{f.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={openTab === 4 ? "block" : "hidden"}
                          id="link4"
                        >
                          <ul>
                            <li>
                              <Link href={`/recipe/${f.id}`}>
                                <Image
                                  src={f.image}
                                  width={400}
                                  height={400}
                                  alt="Food Image"
                                  onClick={() => {
                                    getRecipeInformation(f.id);
                                  }}
                                  className="cursor-pointer"
                                />
                                <p>{f.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={openTab === 5 ? "block" : "hidden"}
                          id="link5"
                        >
                          <ul>
                            <li>
                              <Link href={`/recipe/${f.id}`}>
                                <Image
                                  src={f.image}
                                  width={400}
                                  height={400}
                                  alt="Food Image"
                                  onClick={() => {
                                    getRecipeInformation(f.id);
                                    dispatch(getRecipeInfo(f.id));
                                  }}
                                  className="cursor-pointer"
                                />
                                <p>{f.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={openTab === 6 ? "block" : "hidden"}
                          id="link6"
                        >
                          <ul>
                            <li>
                              <Link href={`/recipe/${f.id}`}>
                                <Image
                                  src={f.image}
                                  width={400}
                                  height={400}
                                  alt="Food Image"
                                  onClick={() => {
                                    getRecipeInformation(f.id);
                                  }}
                                  className="cursor-pointer"
                                />
                                <p>{f.title}</p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
