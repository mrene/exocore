/* Warning, this file is autogenerated by cbindgen. Don't modify this manually. */

#include <stdarg.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>

enum ExocoreConfigFormat {
  ExocoreConfigFormat_Protobuf = 0,
  ExocoreConfigFormat_Yaml,
};
typedef uint8_t ExocoreConfigFormat;

enum ExocoreContextStatus {
  ExocoreContextStatus_Success = 0,
  ExocoreContextStatus_Error,
};
typedef uint8_t ExocoreContextStatus;

enum ExocoreMutationStatus {
  ExocoreMutationStatus_Success = 0,
  ExocoreMutationStatus_Error,
};
typedef uint8_t ExocoreMutationStatus;

enum ExocoreQueryStatus {
  ExocoreQueryStatus_Success = 0,
  ExocoreQueryStatus_Done = 1,
  ExocoreQueryStatus_Error,
};
typedef uint8_t ExocoreQueryStatus;

enum ExocoreQueryStreamStatus {
  ExocoreQueryStreamStatus_Success = 0,
  ExocoreQueryStreamStatus_Done,
  ExocoreQueryStreamStatus_Error,
};
typedef uint8_t ExocoreQueryStreamStatus;

typedef struct ExocoreContext ExocoreContext;

typedef struct ExocoreContextResult {
  ExocoreContextStatus status;
  ExocoreContext *context;
} ExocoreContextResult;

typedef struct ExocoreMutationHandle {
  ExocoreMutationStatus status;
} ExocoreMutationHandle;

typedef struct ExocoreQueryHandle {
  ExocoreQueryStatus status;
  uint64_t query_id;
} ExocoreQueryHandle;

typedef struct ExocoreQueryStreamHandle {
  ExocoreQueryStreamStatus status;
  uint64_t query_id;
} ExocoreQueryStreamHandle;

char *exocore_cell_generate_auth_token(ExocoreContext *ctx, uintptr_t expiration_days);

void exocore_context_free(ExocoreContext *ctx);

ExocoreContextResult exocore_context_new(const unsigned char *config_bytes,
                                         uintptr_t config_size,
                                         ExocoreConfigFormat config_format);

void exocore_free_string(char *ptr);

char *exocore_generate_id(const char *prefix);

char *exocore_store_http_endpoints(ExocoreContext *ctx);

ExocoreMutationHandle exocore_store_mutate(ExocoreContext *ctx,
                                           const unsigned char *mutation_bytes,
                                           uintptr_t mutation_size,
                                           void (*callback)(ExocoreMutationStatus status, const unsigned char*, uintptr_t, const void*),
                                           const void *callback_ctx);

ExocoreQueryHandle exocore_store_query(ExocoreContext *ctx,
                                       const unsigned char *query_bytes,
                                       uintptr_t query_size,
                                       void (*callback)(ExocoreQueryStatus status, const unsigned char*, uintptr_t, const void*),
                                       const void *callback_ctx);

void exocore_store_query_cancel(ExocoreContext *ctx, ExocoreQueryHandle handle);

ExocoreQueryStreamHandle exocore_store_watched_query(ExocoreContext *ctx,
                                                     const unsigned char *query_bytes,
                                                     uintptr_t query_size,
                                                     void (*callback)(ExocoreQueryStatus status, const unsigned char*, uintptr_t, const void*),
                                                     const void *callback_ctx);

void exocore_store_watched_query_cancel(ExocoreContext *ctx, ExocoreQueryStreamHandle handle);