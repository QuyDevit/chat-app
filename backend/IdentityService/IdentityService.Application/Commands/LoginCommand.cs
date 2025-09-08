using IdentityService.Application.Common.Results;
using IdentityService.Application.DTOs.Request;
using MediatR;

namespace IdentityService.Application.Commands
{
    public record LoginCommand(LoginRequest Request) : IRequest<Result<bool>>;
    public class LoginCommandHandler : IRequestHandler<LoginCommand, Result<bool>>
    {
        public async Task<Result<bool>> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
           return Result<bool>.Ok(true,"Đăng nhập thành công");
        }
    }
}
