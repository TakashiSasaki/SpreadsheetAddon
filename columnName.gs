/**
  @param value {String}
  @param row {Integer}
  @param sheet {Sheet}
*/
function findValueHorizontally(value, row, sheet) {
  if(row === undefined) {
    row = 1;
  }
  if(sheet === undefined) {
    sheet = SpreadsheetApp.getActiveSheet();
  }
  var last_column = sheet.getLastColumn();
  var range = sheet.getRange(row, 0, row, last_column);
  var values = range.getValues();
}
