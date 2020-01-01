class Respond {
  static send(res, responseType, data) {
    return Respond[responseType](res, data);
  }

  static success(res, data) {
    return res.status(200).json({ message: 'success', data });
  }

  static badRequest(res, errors) {
    return res.status(400).json({ message: 'malformed request', errors });
  }

  static conflict(res, errors) {
    return res.status(409).json({ message: 'conflict', errors });
  }
  
  static internalError(res, errors) {
    return res.status(500).json({ message: 'Internal error', errors });
  }

  // static unauthenticated(res, errors) {
  //   return res.status(401).json({ message: 'unauthenticated', errors });
  // }

  static unauthorised(res, errors) {
    return res.status(403).json({ message: 'unauthorised', errors });
  }
}

export default Respond;
