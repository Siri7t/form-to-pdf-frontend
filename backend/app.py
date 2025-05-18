from flask import Flask, request, send_file
import pdf_generator
import send_email

app = Flask(__name__)

@app.route('/generate-pdf')
def generate_pdf():
    sheet_id = request.args.get('sheetId')
    email = request.args.get('email')
    pdf_path = pdf_generator.create_pdf_from_sheet(sheet_id)
    send_email.send_email_with_pdf(email, pdf_path)
    return "PDF generated and sent via email."

if __name__ == '__main__':
    app.run(debug=True)