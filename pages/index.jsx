import React, { useState, useEffect } from "react";

import {
  MakeCar,
  ModelMake,
  VersionModel,
  VehiclesPage1,
  VehiclesPage2,
  VehiclesPage3,
} from "../src/services/requests";

import Logo from "../src/components/Logo";
import SubHeader from "../src/components/SubHeader";
import Form from "../src/components/Form";
import ListVehicles from "../src/components/ListVehicles";

function Page({
  GetMakeCar,
  GetVehiclesPage1,
  GetVehiclesPage2,
  GetVehiclesPage3,
}) {
  const [newVehicles, setNewVehicles] = useState(false);
  const [used, setUsed] = useState(false);
  const [makeName, setMakeName] = useState();
  const [modelName, setModelName] = useState();
  const [modelId, setModelId] = useState();
  const [model, setModel] = useState();
  const [versionId, setVersionId] = useState();
  const [version, setVersion] = useState();
  const [versionSelected, setVersionSelected] = useState();
  const [price, setPrice] = useState();
  const [year, setYear] = useState();
  const [stateVehicles, setStateVehicles] = useState([]);

  const allVehicles = [
    ...GetVehiclesPage1,
    ...GetVehiclesPage2,
    ...GetVehiclesPage3,
  ];
  const readModel = async () => {
    const vehicleSelect = GetMakeCar.filter((vehicle) => {
      return vehicle.ID == modelId;
    });
    const GetModelMake = await ModelMake(modelId);
    setMakeName(vehicleSelect[0].Name);
    setModel(GetModelMake);
  };
  useEffect(() => {
    readModel();
  }, [modelId]);

  const readVersion = async () => {
    let modelSelect = [];
    if (model) {
      modelSelect = model.filter((vehicle) => {
        return vehicle.ID == versionId;
      });
    }
    const GetVersionModel = await VersionModel(versionId);
    setModelName(modelSelect[0].Name);
    setVersion(GetVersionModel);
  };
  useEffect(() => {
    readVersion();
  }, [versionId]);

  return (
    <div className="container">
      <Logo />
      <SubHeader />
      <Form
        newVehicles={newVehicles}
        used={used}
        GetMakeCar={GetMakeCar}
        model={model}
        version={version}
        price={price}
        allVehicles={allVehicles}
        makeName={makeName}
        modelName={modelName}
        year={year}
        versionSelected={versionSelected}
        setStateVehicles={setStateVehicles}
        setModelId={setModelId}
        setVersionId={setVersionId}
        setVersionSelected={setVersionSelected}
        setPrice={setPrice}
        setYear={setYear}
        setUsed={setUsed}
        setNewVehicles={setNewVehicles}
      />
      <ListVehicles stateVehicles={stateVehicles} />
    </div>
  );
}

Page.getInitialProps = async () => {
  const GetMakeCar = await MakeCar();
  const GetVehiclesPage1 = await VehiclesPage1();
  const GetVehiclesPage2 = await VehiclesPage2();
  const GetVehiclesPage3 = await VehiclesPage3();
  return {
    GetMakeCar,
    GetVehiclesPage1,
    GetVehiclesPage2,
    GetVehiclesPage3,
  };
};

export default Page;
