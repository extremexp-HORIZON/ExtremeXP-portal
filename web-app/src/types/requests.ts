import { ExperimentType } from './experiment';
import { TaskType } from './task';
import { DatasetType } from './dataset';

export type LoginResponseType = {
  message: string;
  data: {
    jwt: string;
  };
};

export type RegisterResponseType = {
  message: string;
};

export type ProjectsResponseType = {
  message: string;
  data: {
    projects: [];
  };
};

export type CreateProjectResponseType = {
  message: string;
  data: {
    id_project: string;
  };
};

export type UpdateProjectResponseType = {
  message: string;
};

export type DeleteProjectResponseType = {
  message: string;
};

export type ExperimentResponseType = {
  message: string;
  data: {
    experiment: ExperimentType;
  };
};

export type ExperimentsResponseType = {
  message: string;
  data: {
    experiments: Array<ExperimentType>;
  };
};

export type CreateExperimentResponseType = {
  message: string;
  data: {
    id_experiment: string;
  };
};

export type UpdateExperimentNameResponseType = {
  message: string;
};

export type UpdateGraphicalModelResponseType = {
  message: string;
};

export type DeleteExperimentResponseType = {
  message: string;
};

export type CategoriesResponseType = {
  message: string;
  data: {
    categories: [];
  };
};

export type CreateCategoryResponseType = {
  message: string;
  data: {
    id_category: string;
  };
};

export type UpdateCategoryResponseType = {
  message: string;
};

export type DeleteCategoryResponseType = {
  message: string;
};

export type TasksResponseType = {
  message: string;
  data: {
    tasks: Array<TaskType>;
  };
};

export type TaskResponseType = {
  message: string;
  data: {
    task: TaskType;
  };
};

export type CreateTaskResponseType = {
  message: string;
  data: {
    id_task: string;
  };
};

export type UpdateTaskInfoResponseType = {
  message: string;
};

export type DeleteTaskResponseType = {
  message: string;
};

export type DatasetsResponseType = {
  message: string;
  data: {
    datasets: Array<DatasetType>;
  };
};

export type CreateDatasetResponseType = {
  message: string;
  data: {
    id_dataset: string;
  };
};

export type CreateManyDatasetsResponseType = {
  message: string;
  data: {
    dataset_ids: Array<string>;
  };
};

export type UpdateDatasetNameResponseType = {
  message: string;
};

export type UpdateDatasetDescriptionResponseType= {
  message: string;
};

export type UpdateDatasetMetadataResponseType = {
  message: string;
};


export type ConvertorResponseType = {
  message: string;
  data: {
    json: object;
    xmi: string;
  };
};

export type DownloadResponseType = {
  data: Blob; 
  headers: {
    'Content-Disposition'?: string;
    'Content-Type': string;
  };
};

