# Die FakeAPI

Diese kleine API dient zum Mocken einer echten API. Man kann unter `./data` seine Pfade als Verzeichnisse anlegen und darin eine `response.json` ablegen, die die Antwort enthält.

---

Die Pfade können mit **GET** oder **POST** requests abgefragt werden.

---

Mittels **PATCH** können die Rawdaten an den entsprechenden Pfaden noch durch Attribute verändert werden.

---

Mittels **DELETE** lassen sich alle weiteren Patches löschen und man verwendet wieder die Rawdaten aus den Files.