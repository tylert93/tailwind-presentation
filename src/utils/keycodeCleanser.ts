const keycodeCleanser = (event: any) => {
  let code;

  if (event.key !== undefined) {
    code = event.key;
  } else if (event.keyIdentifier !== undefined) {
    code = event.keyIdentifier;
  } else if (event.keyCode !== undefined) {
    code = event.keyCode;
  }

  return code;
};

export default keycodeCleanser;
