function copyRowMetadataToNote() {
  //var spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  var spreadsheetId = "1LD-93DRjJOtPO-Lmg-5ewJ0TQzNQ-7n3DwYLJHHEPVs";
  //var sheetId = SpreadsheetApp.getActiveSheet().getIndex();
  var sheetId = 0;
  var p = {
    "dataFilters" : [
      {
        "developerMetadataLookup": {
          "locationType" : "ROW",
          "metadataLocation" : {
            "sheetId" : sheetId
          }
        }
      }
    ]
  }
  var searchDeveloperMetadataResponse = Sheets.Spreadsheets.DeveloperMetadata.search(p, spreadsheetId);
  Logger.log(searchDeveloperMetadataResponse);
}

function copyColumnMetadataToNote(){
}
