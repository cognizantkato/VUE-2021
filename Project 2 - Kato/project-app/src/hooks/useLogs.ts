import { ref, reactive } from "vue";
import { ActionLogs } from "@/interfaces/ActionLogs";
import { ActionDetails } from "@/interfaces/ActionDetails";

const useLogs = () => {
    let logs = reactive<ActionLogs[]>([]);

    const addLogs = (characterName: string, action: ActionDetails) => {
        logs.unshift({
            message: `${characterName.toUpperCase()} used ${action.moveName.toUpperCase()}!`,
            details:action
        } as ActionLogs);
    }

    const onResetLogs = () => {
        logs = [];
    }

    return {
        logs:logs,
        addLogs: addLogs,
        onResetLogs: onResetLogs
    };
}

export default useLogs;