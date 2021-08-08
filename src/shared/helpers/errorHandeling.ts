import { toast } from "react-toastify";

export const notify = (err: string) => toast.error(err, { autoClose: false });
