var dbConnection = SQL.connect({
  Driver: "MySQL",
  Host: "localhost",
  Port: 3306,
  Database: "invoices",
  UserName: "admin",
  Password: "111"
});

function report1(startDate, endDate) {
  var invoices = dbConnection.query(
    `SELECT * COUNT(*) invoicenum, SUM(invoicenamount)\
    FROM invoice_header\
    WHERE invoicedate BETWEEN ${startDate} AND ${endDate}`
  );
  document.write(invoices);
}

function report2(startDate, endDate) {
  var invoices = dbConnection.query(
    `(SELECT * \
    FROM invoiceheader\
    WHERE invoicedate BETWEEN ${startDate} AND ${endDate} \
    INNER JOIN invoice detail)\
    UNION\
    (SELECT invoiceamount-invoicedetail AS DIFFERENCE(invoiceheader.invoicenum.invoiceamount, SUM(invoicedetail.detailamount))`
  );
  document.write(invoices);
}

function report3(startDate, endDate) {
  var invoices = dbConnection.query(
    `(SELECT * \
      FROM invoiceheader\
      WHERE invoicedate BETWEEN ${startDate} AND ${endDate} \
      INNER JOIN invoicedetail)\
      INNER JOIN invoicecharges\
      UNION\
      (SELECT chargeamount-invoicedetail AS DIFFERENCE(SUM(chargeamount), SUM(invoicedetail.detailamount))`
  );
  document.write(invoices);
}

dbConnection.close();
