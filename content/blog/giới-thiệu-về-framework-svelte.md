---
title: Giới thiệu về framework Svelte
date: 2022-06-17T08:16:36.172Z
subtitle: Bài viết lấy từ chương 1 của quyển "Svelte in action and Sapper - Mark
  Volkmann"
cover: ""
tags: Svelte
---
[Svelte](https://svelte.dev/ "trang chủ Svelte") là một công cụ để xây dựng các ứng dụng web dựa trên JavaScript. Nó là một giải pháp thay thế cho các framework frontend như React, Vue và Angular. Giống như chúng, Svelte tạo ra các thành phần (component) giao diện người dùng (UI) và tương tác giữa các component này với nhau. Mỗi thành phần (component) là một phần độc lập, có khả năng tái sử dụng để tạo ra các giao diện người dùng lớn hơn (vd: 1 trang web) có thể được thiết kế và triển khai độc lập.

Svelte có nhiều lợi ích so với các framework khác:

- Các ứng dụng được tạo bằng Svelte yêu cầu ít mã hơn hầu hết các framework để triển khai chức năng tương đương.

- Svelte tạo ra kích thước gói code bundle nhỏ hơn, dẫn đến giảm thời gian tải của trình duyệt. Điều này giúp Svelte có ưu thế khi hoạt động trên các nền tảng hạn chế về phần cứng như mobile, smart TV hay những thiết bị có đường truyền Internet chậm.

- Svelte đơn giản hóa đáng kể việc quản lý trạng thái (state management) trong application. Việc này thường đòi hỏi có thêm 1 thư viện thứ 3 trong các framework khác như ngrx/store (Angular), Redux (React), và Vuex (Vue).