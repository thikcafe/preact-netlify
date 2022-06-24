---
title: Giới thiệu về Svelte
date: 2022-06-24T16:37:24.287Z
subtitle: Bài viết tham khảo phần chương 1 của quyển "Svelte in action and
  Sapper" (phần số liệu) và bài viết "Introducing Svelte, and Comparing Svelte
  with React and Vue" của tác giả Josh Collinsworth (phần nhược điểm của Svelte)
tags: "# Svelte"
---
Mình luôn muốn viết một bài giới thiệu framework Svelte (nếu các bạn đọc bài trước, chắc các bạn cũng biết đây là framework yêu thích của mình :)). Nhân dịp tác giả của Svelte (Rich Harris) có bài phỏng vấn gần đây (2 ngày khi mình viết bài này) khi Svelte được chọn là "Framework được yêu thích nhất", mình nghĩ đây là lúc.
Svelte là một công cụ để xây dựng các ứng dụng web dựa trên JavaScript. Nó là một giải pháp thay thế cho các framework frontend như React, Vue và Angular. Giống như chúng, Svelte tạo ra các thành phần (component) giao diện người dùng (UI) và tương tác giữa các component này với nhau. Mỗi thành phần (component) là một phần độc lập, có khả năng tái sử dụng để tạo ra các giao diện người dùng lớn hơn (vd: 1 trang web) có thể được thiết kế và triển khai độc lập.
1. Sự hình thành của Svelte:
Nếu bạn giống mình, chắc bạn sẽ không quan tâm đến lịch sử ra đời của một công nghệ nào đó, hay ai đã phát triển nó. Sau này với kinh nghiệm mình mới nhận ra việc biết về sự ra đời của một công nghệ giúp hiểu được thế mạnh và quan trọng hơn là giải pháp (mà trước đó có thể chưa có, hay khó khăn hơn) mà công nghệ đó mang lại. Tuy vậy đó vẫn chưa phải là nguyên nhân chính mà mình nói về nguồn gốc của Svelte, mà là vì bản thân Svelte có một câu chuyện khá đặc biệt mà riêng nó đã nói lên rất nhiều về Svelte (và cả cái tên Svelte của nó.)
Svelte được tạo ra bởi Rich Harris, điểm đặc biệt là Rich Harris không hẳn là một lập trình viên. Thời điểm tạo ra Svelte anh là một nhà phát triển và biên tập đồ họa cho tờ New York Times nổi tiếng. (Hiện nay Harris đã được Vercel thuê làm việc toàn thời gian để phát triển Svelte.)
Thế giới tin tức chuyển động nhanh chóng, vì vậy giao diện người dùng và hình ảnh tương tác mà Harris đang tạo cho Times cần được xây dựng nhanh nhất có thể. Nhưng vì điều quan trọng là tất cả mọi người đều có thể tiếp cận tin tức, những phần tương tác đó cũng phải nhỏ và hiệu quả nhất có thể.
Harris cần một giải pháp cực kỳ nhanh chóng và dễ dàng xây dựng nhưng vẫn sẽ nhanh chóng và mượt mà cho bất kỳ trình duyệt nào trên bất kỳ thiết bị hoặc mạng nào, bất kể giới hạn như thế nào. Trong nhiều trường hợp, các gói JavaScript cồng kềnh là sản phẩm phụ của các framework khác khiến chúng không đủ tiêu chuẩn để xem xét. Vì vậy, Harris bắt đầu xây dựng giải pháp của riêng mình, và đó là cách Svelte ra đời.
Note: về mặt technical, Svelte không hẳn là một framework mà là một compiler. Svelte build code ở thời điểm build time, thay vì thực thi code ở thời điểm run time như các framework khác. Lối tiếp cận khác biệt này Svelte có nhiều ưu điểm so với các framework khác.
Những ưu điểm của Svelte bao gồm:
* Do đặc thù của tin tức là phải nhanh chóng, Svelte mang đến giải pháp bằng việc đơn giản hoá phần syntax và loại bỏ nhiều phần code không cần thiết (boiler code) khi lập trình. Các ứng dụng được tạo bằng Svelte yêu cầu ít mã hơn hầu hết các framework để triển khai chức năng tương đương (việc viết ít code hơn mang đến nhiều ưu điểm, mà sẽ được nói trong phần sau.)
So sánh: (số liệu 2019)
Angular + ngrx: 4,210
React + Redux: 2.050
Vue: 2.076
Svelte: 1.116
Note: phần số liệu chưa cập nhật mới, nhưng chủ yếu là để minh hoạ tính hiệu quả của Svelte.
* New York Times là một tờ báo toàn cầu, vì thế nó yêu cầu việc mở rộng đến lượng người sử dụng lớn nhất có thể. Điều này có nghĩa là bao gồm cả những đối tượng ở những nơi có truy cập Internet chậm, hay sử dụng những thiết bị hạn chế về mặt phần cứng như mobile, smart TV... Svelte tạo ra kích thước gói code bundle nhỏ hơn, dẫn đến giảm thời gian tải của trình duyệt. Điều này giúp Svelte có ưu thế khi làm việc với những môi trường hạn chế trên hơn so với các framework khác.
So sánh: (số liệu 2019)
Angular + ngrx: 134 KB
React + Redux: 193 KB
Vue: 41,8 KB
Svelte: 9,7 KB
Rõ ràng Svelte vượt trội ở chỉ số này (các chỉ số ở thời điểm hiện tại, Svelte vẫn vượt trội hơn)
* Công việc chính là biên tập đồ họa, Harris đã xây dựng các phần hiệu ứng web mà chúng ta hay sử dụng ngay trong framework Svelte (sử dụng CSS thay vì JS, giúp tăng trải nghiệm người dùng). Bên cạnh đó là rất nhiều tính năng "build-in" khác như hỗ trợ Accessibility (giúp tiếp cận nhiều người dùng hơn), hay scoped CSS... 
* Svelte đơn giản hóa đáng kể việc quản lý trạng thái (state management) trong application. Việc này thường đòi hỏi có thêm 1 thư viện thứ 3 trong các framework khác như ngrx/store (Angular), Redux (React), và Vuex (Vue). Nếu các bạn từng việc với các framework khác, chắc các bạn cũng đồng ý là việc học thêm về một thư viện để quản lý không hẳn là một việc dễ dàng (đặc biệt là khi mới tìm hiểu framework). Và để sử dụng các thư viện này thường đòi hỏi phải setup một lượng code tương đối. Việc Svelte không sử dụng bất kỳ thư viện nào để quản lý state theo mình là một ưu điểm rất lớn. 
* Ngoài những ưu điểm kể trên, đối với lập trình viên như chúng ta Svelte mang đến trải nghiệm rất tốt khi sử dụng (từ thời điểm ra mắt Svelte luôn được xếp vào top các framework được cộng đồng dev yêu thích nhất). Nguyên nhân của điều này là vì tác giả của Svelte (Harris) đã định hướng Svelte là một "framework của dev và dành cho dev". Svelte được phát triển theo dạng mã nguồn mở, và các tính năng của nó là những tính năng mà cộng đồng dev sau nhiều năng kinh nghiệm làm việc (cũng như học hỏi từ các framework khác) thêm vào.  
Không tuyệt vời sao khi một framework có thể mang đến trải nghiệm người dùng tốt hơn, làm việc hiệu quả trên nhiều nền tảng (hạn chế) khác nhau và đồng thời thân thiện với người phát triển?
Nhưng không phải là Svelte không có nhược điểm :)
2. Những nhược điểm của Svelte:
Phần này mình hoàn toàn sử dụng nội dung trong bài viết của tác giả Josh. Bạn có thể xem bài viết gốc tại đây
Svelte không hỗ trợ Internet Explorer theo mặc định:
Svelte yêu cầu polyfills chạy đúng cách trong Internet Explorer (và thậm chí như vậy, việc hỗ trợ cho bất kỳ phiên bản IE nào dưới 11 vẫn không được đảm bảo).
Nếu bạn cần hỗ trợ IE-11, bạn có thể đọc vấn đề GitHub của Svelte/IE11, liệt kê một số cách giải quyết và polyfills có thể có. Hoặc đây có thể là một trường hợp cần phải lựa chọn một framework khác.
Tuy nhiên, nếu bạn đang bắt đầu một dự án mới hôm nay: hãy lưu ý rằng Internet Explorer không còn lâu nữa đối với thế giới này. Google tìm kiếm gần đây đã bỏ hỗ trợ cho IE-11 , với lý do thị phần rất nhỏ và đang bị thu hẹp (chỉ khoảng 1% trên tất cả các trình duyệt). WordPress, cung cấp khoảng 40% web vào thời điểm này, đã bỏ hỗ trợ cho IE-11 trong phiên bản WordPress 5.8 vào đầu năm nay. Và ngay cả chính Microsoft cũng sẽ đóng chiếc đinh cuối cùng vào cỗ quan tài của IE-11 vào tháng 7 năm 2022.
Svelte khó trong việc tìm kiếm công việc, vì là một framework còn non trẻ (so với các framework lâu đời khác):
Nếu bạn đang học với hy vọng kiếm được một công việc với các kỹ năng mới tìm thấy của mình, sẽ rất khó để đề xuất bất kỳ điều gì khác ngoài React cho mục tiêu theo đuổi đó — đơn giản vì đây là framework lớn nhất cho đến nay về thị phần và công việc có sẵn. Tôi ước điều đó không phải như vậy, nhưng công nghệ nói chung (ít nhất là ở Mỹ), đã tham gia rất nhiều vào React và tôi sẽ không thấy điều đó sớm thay đổi. Tuy nhiên, mặc dù vậy: nếu bạn đã biết React, tôi nghĩ bạn vẫn nên học Svelte chỉ vì góc nhìn, nếu không có gì khác.
Thay vào đó: bạn đang chọn một công nghệ cho một dự án hoặc công ty mới khởi nghiệp? Svelte có thể sẽ cho phép bạn di chuyển nhanh hơn và xây dựng thứ gì đó hiệu quả hơn, nhưng tuyển dụng hoặc cộng tác có thể là một thách thức, do số lượng lập trình viên Svelte tương đối nhỏ. Tuy nhiên, điều đó nói lên rằng: việc biết một framework JS có xu hướng làm cho việc học một framework mới dễ dàng hơn và Svelte theo ý kiến của tôi là dễ dàng nhất để bắt đầu. Tôi nghĩ rằng bất kỳ lập trình viên nào đã quen thuộc với một framework frontend khác có thể chọn Svelte khá nhanh (và ngược lại).
3. Kết luận:
Mặc dù có những khuyết điểm (ở thời điểm hiện tại)
