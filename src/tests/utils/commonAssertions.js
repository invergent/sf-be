export default {
  badRequest: (res, expectedLengthOfErrors) => {
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('malformed request');
    expect(res.body.errors).toHaveLength(expectedLengthOfErrors);
  }
};
