export interface JsonRpcMessage {
  jsonrpc: '2.0';
  id: number | string;
  method: string;
  params?: any;
}

export interface McpRequest extends JsonRpcMessage {
  method: 'initialize' | 'tools/list' | 'tools/call' | 'sum' | 'createFile';
}

export interface McpResponse {
  jsonrpc: '2.0';
  id: number | string;
  result?: any;
  error?: { code: number; message: string };
}