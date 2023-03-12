# Tạo branch

git branch <branchname>

# Xoá một branch ở phía local

git branch -d <branch_name>

# Chuyển đổi giữa các branch

Để chuyển đổi branch làm việc thì sẽ thực hiện thao tác gọi là checkout.

$ git checkout <branch>

Khi thực hiện checkout, trước tiên nội dung của lần commit cuối cùng trong branch chuyển đến sẽ được mở ra trong worktree. Và commit đã tiến hành sau khi check out thì sẽ được thêm vào branch sau khi di chuyển đến.


# Merge branches

Merge branch sẽ được thực hiện bằng lệnh merge.

$ git merge <commit>