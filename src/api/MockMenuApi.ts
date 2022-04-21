import mockMenu from "constants/mockMenu.json";

export const mockMenuApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMenu);
    }, 300);
  });
