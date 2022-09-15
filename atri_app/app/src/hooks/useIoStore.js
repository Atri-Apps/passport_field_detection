import create from "zustand";

const useIoStore = create((set) => {
  return {
  "Home": {},
  "new_test": {
    "Upload1": {
      "io": {
        "files": {
          "type": "files",
          "mode": "upload"
        }
      }
    }
  },
  "view_test": {}
}});

export default useIoStore;
