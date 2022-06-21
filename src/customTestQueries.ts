import {queryHelpers, buildQueries} from "@testing-library/react";
// @ts-ignore
// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
// @ts-ignore
const queryAllByDataCy = (...args) =>
// @ts-ignore    
    queryHelpers.queryAllByAttribute("data-cy", ...args);
// @ts-ignore
const getMultipleError = (c, dataCyValue) =>
// @ts-ignore    
    `Found multiple elements with the data-cy attribute of: ${dataCyValue}`;
// @ts-ignore    
const getMissingError = (c, dataCyValue) =>
    `Unable to find an element with the data-cy attribute of: ${dataCyValue}`;

const [
    queryByDataCy,
    getAllByDataCy,
    getByDataCy,
    findAllByDataCy,
    findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError);

export {
    queryByDataCy,
    queryAllByDataCy,
    getByDataCy,
    getAllByDataCy,
    findAllByDataCy,
    findByDataCy,
};