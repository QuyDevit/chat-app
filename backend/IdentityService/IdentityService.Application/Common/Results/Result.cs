namespace IdentityService.Application.Common.Results
{
    public class Result<T>
    {
        public T? Data { get; set; }
        public bool Success { get; set; } = true;
        public string Message { get; set; } = string.Empty;

        public static Result<T> Ok(T data,string message = "")
        {
            return new Result<T> { Data = data, Success = true, Message = message };
        }

        public static Result<T> Fail(string message)
        {
            return new Result<T> { Success = false, Message = message };
        }

    }
}
