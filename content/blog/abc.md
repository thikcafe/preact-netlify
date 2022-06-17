---
title: Giới thiệu framework Svelte
date: 2022-06-17T09:08:34.414Z
tags: Svelte
---
[Svelte](https://svelte.dev/ "trang chủ Svelte") là một công cụ để xây dựng các ứng dụng web dựa trên JavaScript. Nó là một giải pháp thay thế cho các framework frontend như React, Vue và Angular. Giống như chúng, Svelte tạo ra các thành phần (component) giao diện người dùng (UI) và tương tác giữa các component này với nhau. Mỗi thành phần (component) là một phần độc lập, có khả năng tái sử dụng để tạo ra các giao diện người dùng lớn hơn (vd: 1 trang web) có thể được thiết kế và triển khai độc lập.

Svelte có nhiều lợi ích so với các framework khác:

* Các ứng dụng được tạo bằng Svelte yêu cầu ít mã hơn hầu hết các framework để triển khai chức năng tương đương.

* Svelte tạo ra kích thước gói code bundle nhỏ hơn, dẫn đến giảm thời gian tải của trình duyệt. Điều này giúp Svelte có ưu thế khi hoạt động trên các nền tảng hạn chế về phần cứng như mobile, smart TV hay những thiết bị có đường truyền Internet chậm.

* Svelte đơn giản hóa đáng kể việc quản lý trạng thái (state management) trong application. Việc này thường đòi hỏi có thêm 1 thư viện thứ 3 trong các framework khác như ngrx/store (Angular), Redux (React), và Vuex (Vue).

## 1.1 Giới thiệu Svelte

Đã có nhiều framework trước Svelte như React, Angular, Vue. Câu hỏi là: chúng ta có thực sự cần một công cụ khác để xây dựng các ứng dụng web không?

Nỗ lực tìm hiểu một cách tiếp cận khác chỉ đáng giá nếu nó mang lại những lợi ích đáng kể. Có lẽ nó có thể yêu cầu viết ít mã hơn để đạt được kết quả tương tự. Có thể nó có thể thực hiện ít công việc thực tế hơn trong thời gian chạy để đạt được kết quả tương tự. Hoặc có lẽ nó có thể dẫn đến tổng số byte cần tải xuống trình duyệt ít hơn.

** Svelte thực hiện tất cả các mục tiêu này và hơn thế nữa. **

> Rich Harris là tác giả của Svelte.
>
> Từ svelte có nghĩa là mảnh mai, mô tả cả cú pháp của Svelte và kích thước gói mà nó tạo ra.

### 1.1.1 Tại sao Svelte?

Svelte có nhiều ưu điểm hơn các framework hiện có. Điều quan trọng nhất trong số này được tóm tắt trong các phần sau.

Các framework phổ biến khác bao gồm các thư viện thời gian chạy (runtime) lớn để hỗ trợ tất cả các tính năng của chúng. Nhưng Svelte không phải là một thư viện thời gian chạy. Nó là một trình biên dịch ứng dụng web được triển khai trong TypeScript. Điều này có nghĩa Svelte build code chúng ta viết về Javascript thuần ở điểm *build time*.

**LƯU Ý:** Trình biên dịch là phần mềm dịch mã từ ngôn ngữ lập trình này sang ngôn ngữ lập trình khác. Thông thường, điều này là từ ngôn ngữ cấp cao (chẳng hạn như Go hoặc Java) sang ngôn ngữ cấp thấp hơn (chẳng hạn như mã máy hoặc bytecode).

**LƯU Ý:** TypeScript là một ngôn ngữ lập trình mã nguồn mở là một tập hợp siêu của JavaScript; các chương trình của nó được biên dịch sang JavaScript. TypeScript bổ sung nhiều tính năng trên JavaScript, trong đó quan trọng nhất là khả năng xác định các loại biến và hàm. TypeScript được phát triển và duy trì bởi Microsoft.

Trình biên dịch Svelte biên dịch các t tin đuôi .svelte sang JavaScript và CSS. Điều này có nhiều lợi ích, một là các tính năng mới có thể được thêm vào Svelte mà không làm tăng kích thước gói của các ứng dụng đã triển khai. Trình biên dịch chỉ bao gồm mã cho các tính năng của Svelte thực sự được sử dụng.

#### SVELTE SẢN XUẤT GÓI BUNDLE NHỎ

Ứng dụng Svelte có kích thước gói nhỏ hơn đáng kể so với các ứng dụng tương đương được tạo bằng các  khác. Điều này có nghĩa là các ứng dụng Svelte có thể được tải xuống các trình duyệt nhanh hơn.

**LƯU Ý:** Trong ngữ cảnh của các ứng dụng web, các gói là các tệp JavaScript được tạo bằng cách kết hợp, tối ưu hóa và giảm thiểu tất cả các mã JavaScript mà một ứng dụng cần.

Phần lớn, Svelte đạt được kích thước gói nhỏ hơn bằng cách chỉ bao gồm mã được yêu cầu thay vì toàn bộ thư viện.

**LƯU Ý:** Tất cả các framework đều cố tối ưu để loại bỏ mã không sử dụng (sử dụng kỹ thuật "tree shaking"). Nhưng Svelte giữ lại ít mã hơn nhiều. Ví dụ: các ứng dụng React phải gửi mã tạo ra các đại diện DOM ảo (virtual DOM) và tìm ra sự khác biệt giữa chúng. Svelte không sử dụng virtual DOM mà vẫn giữ được hiệu ứng tương tự.

> Tham khảo bài viết trên blog của Svelte: <https://svelte.dev/blog/virtual-dom-is-pure-overhead>

Theo số liệu so sánh các framework của FreeCodeCamp, “So sánh RealWorld giữa các framework Front-End với điểm chuẩn (bản cập nhật 2019)”, thống kê danh mục về việc xây dựng một ứng dụng web trong thế giới thực sử dụng nhiều framework khác nhau ( <http://mng.bz/8pxz> ). Trong trường hợp này, ứng dụng được sử dụng để so sánh là một trang blog xã hội có tên “Conduit”, tương tự như Medium.com.

Kích thước ứng dụng được gzipped được báo cáo cho một số lựa chọn framework phổ biến bao gồm:

Angular + ngrx: 134 KB

React + Redux: 193 KB

Vue: 41,8 KB

Svelte: 9,7 KB

Rõ ràng Svelte vượt trội ở chỉ số này.

#### SVELTE YÊU CẦU ÍT MÃ HƠN

Svelte yêu cầu ít mã hơn để triển khai cùng một chức năng. Số dòng mã được báo cáo từ các điểm chuẩn giống nhau này là:

Angular + ngrx: 4,210

React + Redux: 2.050

Vue: 2.076

Svelte: 1.116

Điều này có ý nghĩa vì nhiều lý do. Có ít mã hơn nghĩa là thời gian dùng để viết ít hơn, và có ít mã hơn để đọc (việc mà còn chiếm thời gian nhiều hơn cả việc viết mã). Nó cũng có nghĩa là có ít lỗi hơn trong mã.

