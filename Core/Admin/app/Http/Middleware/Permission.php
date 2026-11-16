<?php

namespace Core\Admin\Http\Middleware;

use Closure;
use Core\Admin\Models\Role;
use Illuminate\Http\Request;
use Core\Admin\Models\AuthMenu;
use Core\Admin\Models\MenuAction;
use Illuminate\Support\Facades\Auth;

class Permission
{
    public function handle(Request $request, Closure $next)
    {
        try {
            if (!empty(Auth::user())) {
                $roleId = Auth::user()->role_id;
                $routeName = request()->route()->getName();
                $role = Role::where('id', @$roleId)->first();

                $userMenuAction = MenuAction::where('link', @$routeName)->first();
                $userMenus = AuthMenu::where('link', @$routeName)->first();

                $permission = @$role->permission;
                $rolePermission = @$role->actionPermission;

                if ($userMenus != null) {
                    if (in_array($userMenus->id, @$permission)) {
                        return $next($request);
                    } else {
                        return redirect(route("admin.dashboard.index"));
                    }
                } else if ($userMenuAction != null) {
                    if (in_array(@$userMenuAction->id, @$rolePermission)) {
                        return $next($request);
                    } else {
                        return redirect(route("admin.dashboard.index"));
                    }
                } else {
                    return $next($request);
                }
            }
        } catch (\Exception $exc) {
            return redirect()->route("admin.dashboard.index");
        }
        return $next($request);
    }
}
