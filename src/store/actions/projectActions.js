export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection ('projects').add({
      ...project,
      authorFirstName: 'Reppy',
      authorLastName: 'Purpose',
      authorId: 12345,
      CreatedAt: new Date() 
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: ' CREATE_PROJECT_ERROR', err })
    })
  }
};