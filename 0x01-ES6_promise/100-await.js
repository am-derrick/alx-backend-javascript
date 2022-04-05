import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    try {
	const photo = await uploadPhoto();
	const user = await createUser();

	return promise.resolve({ photo, user });
    } catch (err) {
	retun Promise.resolve({ photo: null, user: null });
    }
}
