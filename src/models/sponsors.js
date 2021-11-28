import mongoose from 'mongoose';

const sponsorSchema = mongoose.Schema({
	name: String
});
const SponsorModel = mongoose.model("Sponsor", sponsorSchema);

export default SponsorModel;