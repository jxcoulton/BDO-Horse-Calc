import React from "react";
import pricePerLevelTier from "../database/pricePerLevelTier";
import baseValueData from "../database/baseValue.js";
import skillsData from "../database/skillsData";

const Total = ({ formData, price }) => {
  const baseTierValue = () => {
    let value = "";
    baseValueData.forEach((item, i) => {
      item.tier === +formData.tierLevel ? (value = item.value) : "";
    });
    return value;
  };

  const levelValue = () => {
    let value = "";
    pricePerLevelTier.forEach((item) => {
      item.tier === +formData.tierLevel
        ? (value = item.value * +formData.rawLevel)
        : "";
    });
    return value;
  };

  const genderMod = () => {
    switch (formData.gender) {
      case "m":
        return 1;
      case "f":
        return 1.2;
      default:
        return "";
    }
  };

  const breedMod = () => {
    switch (formData.breedings) {
      case "0":
        return 0.75;
      case "1":
        if (formData.gender === "m") return 0.88;
        if (formData.gender === "f") return 1;
        if (formData.gender === "") return "";
      case "2":
        if (formData.gender === "f") return "";
        return 1;
      default:
        return "";
    }
  };

  const resetMod = () => {
    switch (formData.reset) {
      case "y":
        return 1;
      case "n":
        return 0.8;
      default:
        return "";
    }
  };

  const courserMod = () => {
    switch (formData.courser) {
      case "y":
        return 3.6;
      case "n":
        return 1;
      default:
        return "";
    }
  };

  const tierMod = () => {
    return +formData.tierLevel * 0.3;
  };

  const totalCheckedSkills = () => {
    let totalSkillValue = 0;
    formData.skills.forEach((skill) => {
      skillsData.forEach((item) => {
        skill === item.name ? (totalSkillValue += item.value) : 0;
      });
    });
    return totalSkillValue;
  };

  const totalSalePrice = () => {
    return (
      ((baseTierValue() + levelValue()) *
        genderMod() *
        breedMod() *
        resetMod() +
        totalCheckedSkills() * tierMod()) *
      courserMod()
    );
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const finalValue = () => {
    if (totalSalePrice() >= 1000) {
      return `Selling price is around $${numberWithCommas(
        Math.round(totalSalePrice())
      )}`;
    }
  };

  const correctLevel = () => {
    if (+formData.rawLevel > 0 && +formData.rawLevel < 31) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {correctLevel() ? (
        <h2>Please enter a valid level</h2>
      ) : (
        <h2> {finalValue()}</h2>
      )}
      {/* <h1>{totalCheckedSkills()}</h1>
      <h3>
        base value:{baseTierValue()}, level value:{levelValue()}, Gender mod:
        {genderMod()}, Breed Mod: {breedMod()}, Reset Mod: {resetMod()}, Courser
        Mod: {courserMod()}, tier Mod: {tierMod()}
      </h3> */}
    </>
  );
};

export default Total;
