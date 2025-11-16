// types.ts

export type EngineConfig = {
  maxConcurrency: number
  maxHeapSize: number
  maxThreadCount: number
  maxQueueSize: number
}

export type EngineLogEntry = {
  timestamp: number
  level: 'INFO' | 'WARN' | 'ERROR'
  message: string
  meta: {
    requestId: string
  }
}

export type EngineStats = {
  totalRequests: number
  pendingRequests: number
  requestQueueLength: number
  heapSize: number
  maxHeapSize: number
  memoryUsage: number
  cpuUsage: number
  gcCount: number
  gcTime: number
}

export type EngineError = {
  code: number
  message: string
  request: string
  response: string
}

export type EngineRequest = {
  id: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  url: string
  headers: { [key: string]: string }
  body: string
  timeout: number
}