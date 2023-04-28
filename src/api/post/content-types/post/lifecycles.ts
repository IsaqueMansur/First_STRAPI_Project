import axios from "axios";

export default {
  async afterCreate(result, data) {
    axios.post(
      "https://api.vercel.com/v1/integrations/deploy/prj_Wn4tKLDdJy4BeSDnOeGBG06P0Sfu/l90X28JiKM"
    );
  },

  afterUpdate(event) {
    axios.post(
      "https://api.vercel.com/v1/integrations/deploy/prj_Wn4tKLDdJy4BeSDnOeGBG06P0Sfu/l90X28JiKM"
    );
  },
};
