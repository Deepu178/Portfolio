import React from "react";
import { projects } from "./projects";

export const Personal = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-yellow-500">
            Personal
          </h1>
          <p className="text-lg font-semibold">
            Here are some of my personal projects
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {projects.map((project) => {
            const { id, name, description, url, image } = project;
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-yellow-500">
                    {name}
                  </h1>
                  <p className="text-lg font-semibold">{description}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <a href={url} target="_blank" rel="noreferrer">
                    <img src={image} alt={name} className="w-96 h-96" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
