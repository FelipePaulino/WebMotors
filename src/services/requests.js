import request from "./request";

export function MakeCar() {
  return request(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Make`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function ModelMake(MakeId) {
  return request(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${MakeId}`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function VersionModel(MakeId) {
  return request(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${MakeId}`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function VehiclesPage1() {
  return request(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function VehiclesPage2() {
  return request(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=2`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
export function VehiclesPage3() {
  return request(
    `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=3`
  )
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
