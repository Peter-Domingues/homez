import axios from "axios";

const getToken = async () => {
  try {
    const clientId = process.env.REACT_APP_REALTY_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_REALTY_CLIENT_SECRET;
    const authenticationUrl =
      "https://realtyfeed-sso.auth.us-east-1.amazoncognito.com/oauth2/token";
    const payload = `grant_type=client_credentials&client_id=${clientId}`;

    const auth = {
      username: clientId,
      password: clientSecret,
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const response = await axios.post(authenticationUrl, payload, {
      headers,
      auth,
    });

    const result = response.data;
    const accessToken = result.access_token;

    return accessToken;
  } catch (err) {
    console.error("Error:", err.message);
  }
};

const fetchInfo = async (page, filters, rentOrSale, statusType, top) => {
  const xApiKey = process.env.REACT_APP_REALTY_X_API_KEY;
  const skip = page ? "&$skip=" + page : "";

  const changeFilter = (filtersSelected) => {
    let finalUrl = "";

    filtersSelected.map((filter, index) => {
      let urlFilter;

      if (index === 0) {
        urlFilter =
          filter.type === "ListPrice" ||
          filter.type === "LivingArea" ||
          filter.type === "YearBuilt"
            ? `&$filter=${filter.type} gt ${filter.props.min || 10} and ${
                filter.type
              } lt ${filter.props.max}`
            : `&$filter=${filter.type} eq '${filter.props}'`;

        finalUrl = finalUrl + urlFilter;
        return;
      }
      urlFilter =
        filter.type === "ListPrice" ||
        filter.type === "LivingArea" ||
        filter.type === "YearBuilt"
          ? ` and ${filter.type} gt ${filter.props.min} and ${filter.type} lt ${filter.props.max}`
          : ` and ${filter.type} eq '${filter.props}'`;

      finalUrl = finalUrl + urlFilter;
    });

    return finalUrl;
  };

  const filterUrl = filters ? changeFilter(filters) : "";

  const changeRentOrSale = (rentOrSales) => {
    if (rentOrSale === "") return;
    if (rentOrSales === "rent")
      return `${
        filterUrl !== "" ? "%20and%20" : "&$filter="
      }PropertyType in ('ResidentialLease', 'CommercialLease')`;

    return `${
      filterUrl !== "" ? "%20and%20" : "&$filter="
    }PropertyType ne ('ResidentialLease', 'CommercialLease')`;
  };

  const changeStatus = (status) => {
    if (status === "") return;
    if (status === "oldest")
      return `${
        filterUrl.includes("orderBy") ? " and " : "&$orderby="
      }ModificationTimestamp asc`;

    return `${
      filterUrl.includes("orderBy") ? " and " : "&$orderby="
    }ModificationTimestamp desc`;
  };

  const rentOrSaleUrl = rentOrSale ? changeRentOrSale(rentOrSale) : "";
  const statusUrl = statusType ? changeStatus(statusType) : "";
  const final = statusUrl === "" ? `&$orderby=ListPrice desc` : "";
  const url = `https://api.realtyfeed.com/reso/odata/Property?$top=${
    top ? top : "10"
  }${skip}${filterUrl}${rentOrSaleUrl}${statusUrl}${final}`;
  const token = await getToken();

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "x-api-key": xApiKey,
    },
  });
  const data = await response.json();
  return data;
};

const fetchPropertieById = async (id) => {
  const xApiKey = process.env.REACT_APP_REALTY_X_API_KEY;
  const url = `https://api.realtyfeed.com/reso/odata/Property('${id}')`;
  const token = await getToken();

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "x-api-key": xApiKey,
    },
  });
  const data = await response.json();
  return data;
};

const fetchPropertieByPriceRange = async (min, max) => {
  const xApiKey = process.env.REACT_APP_REALTY_X_API_KEY;
  const url = `https://api.realtyfeed.com/reso/odata/Property?$filter=ListPrice gt ${min} and ListPrice lt ${max}&$orderby=ListPrice`;
  const token = await getToken();

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "x-api-key": xApiKey,
    },
  });
  const data = await response.json();
  return data;
};

const fetchMember = async (id) => {
  const xApiKey = process.env.REACT_APP_REALTY_X_API_KEY;
  const url = `https://api.realtyfeed.com/reso/odata/Property?filter=ListAgentMlsId eq '3535815'`;
  const token = await getToken();

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "x-api-key": xApiKey,
    },
  });
  const data = await response.json();
  return data;
};

export {
  fetchInfo,
  fetchPropertieById,
  fetchPropertieByPriceRange,
  fetchMember,
};
