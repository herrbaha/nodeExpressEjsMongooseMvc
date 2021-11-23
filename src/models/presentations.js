import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mongoConference');

const presentationSchema = mongoose.Schema({
	title: String,
	room: String
});
const PresentationModel = mongoose.model("Presentation", presentationSchema);

export default PresentationModel;
