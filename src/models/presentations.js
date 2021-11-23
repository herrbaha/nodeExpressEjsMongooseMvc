import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mongoConference');

const presentationSchema = mongoose.Schema({
	name: String
});
const PresentationModel = mongoose.model("Speaker", presentationSchema);

export default PresentationModel;
