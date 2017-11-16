function getSheet_(propertyName, properties, sheetName) {
  if(properties === undefined) {
    properties = PropertiesService.getUserProperties();
  }
  if(sheetName === undefined) {
    var sheetName = properties.getProperty(propertyName);
  }
  if(typeof sheetName !== "string") {
    sheetName = (new Date()).toString();
  }
  var alertResult = alert(sheetName);
  if(alertResult === undefined) return;
  if(alertResult === null) return;
  if(alertResult === false) sheetName = (new Date()).toString();
  
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  if(sheet === null) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  properties.setProperty(propertyName, sheet.getSheetName());
  return sheet;
}

/**
  @param {String} propertyName
  @param {String} sheetName
  @returns {Sheet}
*/
function getUserSheet(propertyName, sheetName) {
  return getSheet_(propertyName, PropertiesService.getUserProperties(), sheetName);
}

/**
  @param {String} propertyName
  @param {String} sheetName
  @returns {Sheet}
*/
function getScriptSheet(propertyName, sheetName) {
  return getSheet_(propertyName, PropertiesService.getScriptProperties(), sheetName);
}

/**
  @param {String} propertyName
  @param {String} sheetName
  @returns {Sheet}
*/
function getDocumentSheet(propertyName, sheetName) {
  return getSheet_(propertyName, PropertiesService.getDocumentProperties(), sheetName);
}
