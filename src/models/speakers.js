import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mongoConference');

const speakerSchema = mongoose.Schema({
	name: String,
	presentation: String
});
const SpeakerModel = mongoose.model("Speaker", speakerSchema);

export default SpeakerModel;
