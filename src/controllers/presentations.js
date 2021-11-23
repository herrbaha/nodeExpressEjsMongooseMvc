import PresentationModel from '../models/presentations.js';

export const getAllPresentations = async () => {
	const presentations = await PresentationModel.find({});
	return presentations;
}