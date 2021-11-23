import PresentationModel from '../models/speakers.js';

export const getAllPresentations = async () => {
	const presentations = await PresentationModel.find({});
	return presentations;
}