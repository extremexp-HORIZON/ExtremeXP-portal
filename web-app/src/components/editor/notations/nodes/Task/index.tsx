import "./style.scss";
import { memo, useEffect, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { TabType, addTab } from "../../../../../stores/tabStore";
import { useConfigPanelStore } from "../../../../../stores/configPanelStore";
import { TaskDataType } from "../../../../../types/task";

const Task = ({
  id,
  data,
  isConnectable,
  sourcePosition = Position.Bottom,
  targetPosition = Position.Top,
}: NodeProps) => {
  const selectedTaskData = useConfigPanelStore(
    (state) => state.selectedTaskName
  );
  const selectedNodeId = useConfigPanelStore((state) => state.selectedNodeId);
  const selectedVariant = useConfigPanelStore((state) => state.selectedVariant);

  const [currentTask, setCurrentTask] = useState<TaskDataType>(
    data.variants[0]
  );

  const [taskName, setTaskName] = useState<string>(currentTask.name);

  useEffect(() => {
    if (id === selectedNodeId) {
      const variant = data.variants.find(
        (variant: TaskDataType) => variant.id_task === selectedVariant
      );
      variant.name = selectedTaskData;
    }
  }, [selectedNodeId, selectedTaskData]);

  useEffect(() => {
    if (id === selectedNodeId && currentTask.id_task !== selectedVariant) {
      data.currentVariant = selectedVariant;
    }
  }, [selectedNodeId, selectedVariant]);

  useEffect(() => {
    const task = data.variants.find(
      (t: TaskDataType) => t.id_task === data.currentVariant
    );
    setCurrentTask(task);
  }, [data.currentVariant, selectedTaskData]);

  useEffect(() => {
    setTaskName(selectedTaskData);
  }, [selectedTaskData]);

  const handleAddTab = () => {
    const tab: TabType = {
      name: currentTask.name,
      id: currentTask.id_task,
    };
    addTab(tab);
  };

  return (
    <>
      <div className="node-task">
        <div className="node-task__name">{taskName}</div>
        <div className="node-task__properties">property placeholder</div>
        {currentTask.is_composite && (
          <div className="node-task__icon">
            <div
              className="node-task__icon__wrapper"
              onDoubleClick={handleAddTab}
            >
              <span className="iconfont">&#xe601;</span>
            </div>
          </div>
        )}
        <Handle
          type="source"
          position={sourcePosition}
          isConnectable={isConnectable}
        />
        <Handle
          type="target"
          position={targetPosition}
          isConnectable={isConnectable}
        />
      </div>
    </>
  );
};

export default memo(Task);
// export default Task;
