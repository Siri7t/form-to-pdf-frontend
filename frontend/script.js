async function generatePDF() {
  const sheetId = document.getElementById('sheetId').value;
  const email = document.getElementById('email').value;
  const status = document.getElementById('status');
  status.textContent = 'Generating PDF and sending email...';

  try {
    const response = await fetch(`https://your-backend-url.com/generate-pdf?sheetId=${sheetId}&email=${email}`);
    const result = await response.text();
    status.textContent = result;
  } catch (err) {
    status.textContent = 'Error generating or sending PDF.';
    console.error(err);
  }
}