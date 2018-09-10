PDFDocument = require 'pdfkit'
doc = new PDFDocument

doc.pipe fs.createWriteStream('/path/to/file.pdf') 
doc.pipe res 


doc.end()