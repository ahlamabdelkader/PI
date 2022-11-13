from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app  = Flask(__name__)
app.config['SECRET_KEY'] = 'hardsecretkey'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/sista'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Offres(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    titre = db.Column(db.String(255), unique = True)
    code = db.Column(db.String(255))
    date_enonce = db.Column(db.Date)
    date_depot = db.Column(db.Date)
    date_limite = db.Column(db.Date)
    fichier_offre = db.Column(db.String(255))
    client = db.Column(db.String(255))
    status = db.Column(db.String(255))
    zone = db.Column(db.String(255))
    def __init__(self, titre, code, date_enonce, date_depot, date_limite, client, status, zone):
        self.titre = titre
        self.code = code
        self.date_enonce = date_enonce
        self.date_depot = date_depot
        self.date_limite = date_limite
        self.client = client
        self.status = status
        self.zone = zone
a = []
with app.app_context():
    db.create_all()
    # db.session.add(Offres(titre = "TalebBahan",code = "tyi",date_enonce = '2020-10-1',date_depot = '2020-10-1',date_limite = '2020-10-1',client = 'Bedra',zone = 'ehlam',status = 'touba'))
    db.session.commit()
    data=Offres.query.all()
    print(data[0].titre)
    for i in data :
        offres_data = { "titre" : '', "code" : '', "date_enonce" : '', "date_depot" : '', "date_limite" : '', "client" : '', "status" : '', "zone" : ''}
        offres_data["titre"] = i.titre
        offres_data["code"] = i.code
        offres_data["date_enonce"] = i.date_enonce
        offres_data["date_depot"] = i.date_depot
        offres_data["date_limite"] = i.date_limite
        offres_data["client"] = i.client
        offres_data["status"] = i.status
        offres_data["zone"] = i.zone
        a.append(offres_data)

print(a)
@app.route("/offres")
def offre():
    return a

app.run(debug=True)