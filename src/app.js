import express from 'express';
import path from 'path';

import * as SpeakersController from './controllers/speakers.js';
import * as PresentationsController from './controllers/presentations.js';

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3044;
const staticDirectory = path.join(__dirname, './public');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
app.use(express.static(staticDirectory));

app.get('/', (req, res) => {
	res.render('index', {
		pageTitle: "Welcome"
	});
});

app.get('/speakers', async (req, res) => {
	const speakers = await SpeakersController.getAllSpeakers();
	res.render('speakers', {
		pageTitle: "Speakers",
		speakers
	});
});

app.get('/presentations', async (req, res) => {
	const presentations = await PresentationsController.getAllPresentations();
	res.render('presentations', {
		pageTitle: "Presentations",
		presentations: presentations
	});
});

app.listen(port, () => {
	console.log(`Now listening on port http://localhost:${port}`);
})