const HTTP_STATUS_CODES = {
  NOT_FOUND: 404,
  OK: 200,
  CREATE_OK: 201,
  INTERNAL_SERVER_ERROR: 500,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  BAD_REQUEST: 400,
};

const MESSAGES = {
  GENERIC_ERROR: "Something went wrong",
  PATH_ERROR: "Path not valid",
};

module.exports = { HTTP_STATUS_CODES, MESSAGES };
