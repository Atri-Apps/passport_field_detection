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
  }
}});

export default useIoStore;
