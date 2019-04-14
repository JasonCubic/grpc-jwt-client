const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// protoLoader options here:  https://www.npmjs.com/package/@grpc/proto-loader
const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, 'json.proto'),
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  });

const JsonProto = grpc.loadPackageDefinition(packageDefinition).json;
const client = new JsonProto.JsonService('localhost:50051', grpc.credentials.createInsecure());

module.exports = client;
