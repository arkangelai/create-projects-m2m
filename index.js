const getAuth0Token = require('./getAuth0Token');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const createProject = require('./src/create-project');
const updateProject = require('./src/update-project');
const createDataset = require('./src/create-dataset');

(async function () {
  try {
    const createdProject = await createProject({
      body: {
        name:  "Testing create project dataset",
        modelType: 0,
        typeExperiment: "data"
      }
    })
    const updatedProject = await updateProject({
      body: {
        projectId: createdProject.result.id,
        about: "Calculate the probability of a patient suffering from cancer",
        costByPrediction: 1000,
        timeByPrediction: 8000,
        guestEmails: ["frontend@email.com"]
      }
    })

    const data = new FormData();
    data.append('projectId', updatedProject.result.id);
    data.append(
      'dataset',
      fs.createReadStream(
        path.resolve(
          __dirname,
          './cancer_reg_ark.zip'
        )
      )
    );

    const createdDataset = await createDataset({
      formData: data
    })
    console.log(createdDataset)
  } catch (error) {
    console.log({ error });
  }
})()
