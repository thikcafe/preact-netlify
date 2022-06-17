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

#### SVELTE CUNG CẤP KHẢ NĂNG PHẢN ỨNG MÀ KHÔNG CẦN SỬ DỤNG DOM ẢO

Một số khuôn khổ web, bao gồm cả React và Vue, sử dụng Mô hình đối tượng tài liệu ảo(DOM) để tối ưu hóa việc cập nhật DOM thực để đáp ứng với các thay đổi dữ liệu. Khi trạng thái thành phần thay đổi, khung xây dựng một phiên bản DOM mới trong bộ nhớ và sau đó so sánh nó với phiên bản trước đó. Chỉ sự khác biệt được áp dụng cho DOM thực. Mặc dù điều này nhanh hơn so với cập nhật mọi thứ trong DOM thực, nhưng phải mất thời gian để xây dựng DOM ảo và so sánh với DOM trước đó.

Khả năng phản ứng là khả năng cập nhật DOM để đáp ứng với các thay đổi trạng thái của ứng dụng và thành phần. Svelte cung cấp khả năng phản hồi bằng cách theo dõi các thay đổi đối với các biến thành phần cấp cao nhất (không phải trong phạm vi các hàm bên trong) ảnh hưởng đến những gì các thành phần hiển thị. Nó chỉ cập nhật các phần bị ảnh hưởng của DOM thay vì hiển thị lại toàn bộ thành phần. Điều này cho phép Svelte thực hiện ít công việc hơn nhiều khung công tác để giữ cho DOM đồng bộ với trạng thái ứng dụng.

#### SVELTE NHANH

Kiểm tra điểm chuẩn của Stefan Krause tại <https://krausest.github.io/js-framework-benchmark/current.html>. Ứng dụng được sử dụng trong các thử nghiệm này hiển thị một bảng có 4 cột và 1.000 hàng. Trên trang này, bạn có thể chọn các khung được so sánh và xem các thống kê song song. Ví dụ: chọn “có khóa theo góc cạnh-v8.0.1”, “có khóa phản ứng-v16.8.6”, “có khóa svelte-v3.5.1” và “có khóa vue-v2.6.2”. Điều này trả về kết quả cho thời gian khởi động ứng dụng được hiển thị trong hình 1.1. Những kết quả này chứng minh rằng Svelte khá nhanh so với các tùy chọn khác.

**LƯU Ý:** Thuật ngữ được khóa trong các lựa chọn này có nghĩa là mã tạo ra mối liên kết giữa dữ liệu và các phần tử DOM. Khi dữ liệu thay đổi, phần tử DOM được liên kết sẽ được cập nhật. Việc thêm và loại bỏ các phần tử mảng khiến các phần tử DOM được thêm vào và loại bỏ. Kết quả kiểm tra trong hình 1.1 là từ các triển khai "có khóa" vì điều đó đại diện hơn cho những gì ứng dụng thường sử dụng để làm cho việc cập nhật các phần tử DOM hiện có hiệu quả hơn.

![Thời gian khởi động điểm chuẩn và thời gian tải xuống](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781617297946/files/OEBPS/Images/1-1.png)

Hình 1.1 Thời gian khởi động điểm chuẩn và thời gian tải xuống

#### SVELTE YÊU CẦU ÍT BỘ NHỚ HƠN

Sử dụng ít bộ nhớ hơn là một lợi ích đáng kể khi các ứng dụng web được chạy trên các máy tính hoặc thiết bị di động cũ hơn, vốn có xu hướng có ít bộ nhớ khả dụng hơn để chạy các ứng dụng.

Trang web điểm chuẩn được sử dụng trong phần trước báo cáo so sánh về việc sử dụng bộ nhớ được thể hiện trong hình 1.2. Những kết quả này chứng minh rằng các ứng dụng Svelte thường sử dụng ít bộ nhớ hơn các tùy chọn khác.

#### CÁC THÀNH PHẦN CỦA SVELTE KHÔNG SỬ DỤNG VÙNG CHỨA JAVASCRIPT

Các tệp tin .svelte không xác định bất kỳ loại vùng chứa JavaScript nào cho thành phần. Thay vào đó, một thành phần được xác định bởi sự kết hợp của một script phần tử, HTML để hiển thị và một style phần tử.

Cách tiếp cận này đơn giản hơn so với cách tiếp cận được sử dụng bởi hầu hết các khuôn khổ web khác. Cần ít dòng mã hơn để xác định một thành phần và có ít khái niệm JavaScript hơn để suy nghĩ. Ví dụ, các thành phần Angular được định nghĩa bởi một lớp, các thành phần React được xác định bởi một hàm hoặc một lớp, các thành phần Vue 2 được xác định bởi một đối tượng theo nghĩa đen và các thành phần Vue 3 được xác định bởi các hàm.

#### KIỂU DÁNG MẢNH MAI ĐƯỢC MỞ RỘNG PHẠM VI

Theo mặc định, CSS được chỉ định trong mỗi thành phần Svelte chỉ áp dụng cho thành phần đó. Điều này có nghĩa là các quy tắc CSS được xác định trong một tệp .svelte không vô tình “lọt ra ngoài” và ảnh hưởng đến kiểu dáng của các thành phần khác.

Các phong cách được xử lý khác nhau trong các khuôn khổ khác. Trong Angular, các kiểu được chỉ định trong thuộc styles tính của một thành phần cũng được xác định phạm vi cho thành phần theo mặc định. Trong Vue, các kiểu chỉ được xác định phạm vi đối với các thành phần nếu chúng được chỉ định bên trong một style phần tử có scoped thuộc tính. React không cung cấp hỗ trợ định dạng phạm vi cho các thành phần, đó là một lý do tại sao các giải pháp CSS-in-JS lại phổ biến trong các ứng dụng React. Có rất ít sự hấp dẫn đối với các giải pháp CSS-in-JS này trong Svelte.

![Sử dụng bộ nhớ điểm chuẩn tính bằng MB](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781617297946/files/OEBPS/Images/1-2.png)

Hình 1.2 Sử dụng bộ nhớ điểm chuẩn tính bằng MB

#### SVELTE CUNG CẤP MỘT NƠI CHO CÁC PHONG CÁCH TOÀN CẦU

Svelte cung cấp một nơi rõ ràng để chỉ định các kiểu toàn cục có thể ảnh hưởng đến bất kỳ thành phần nào. Đây là trong tập tin public/global.css.

#### SVELTE ĐƠN GIẢN HÓA QUẢN LÝ NHÀ NƯỚC

Quản lý trạng thái ứng dụng và thành phần dễ dàng hơn nhiều trong Svelte so với các khung công tác khác. Các tính năng đóng góp bao gồm ngữ cảnh, cửa hàng và ngữ cảnh mô-đun, mỗi tính năng sẽ được đề cập chi tiết ở phần sau.

#### SVELTE HỖ TRỢ LIÊN KẾT DỮ LIỆU HAI CHIỀU

Svelte giúp dễ dàng liên kết giá trị của một điều khiển biểu mẫu với một biến thành phần. Điều khiển biểu mẫu bao gồm input, text area và select các phần tử. Các biến cấp cao nhất trong .svelte tệp đại diện cho trạng thái của một thành phần.

Khi giá trị của một biến bị ràng buộc thay đổi, giá trị của các điều khiển biểu mẫu được liên kết sẽ tự động được cập nhật. Khi người dùng thay đổi giá trị của điều khiển biểu mẫu liên kết, giá trị của biến được liên kết sẽ tự động được cập nhật.

#### SVELTE LÀM CHO HOẠT ẢNH TRỞ NÊN DỄ DÀNG

Svelte có hỗ trợ tích hợp cho nhiều loại hoạt ảnh. Thêm hoạt ảnh vào một ứng dụng đơn giản một cách đáng ngạc nhiên. Điều này khuyến khích việc sử dụng nhiều hoạt ảnh hơn, có thể mang lại trải nghiệm người dùng tốt hơn.

Ví dụ về các hoạt ảnh như vậy trong ứng dụng Todo bao gồm làm cho các mục việc cần làm mới mờ dần trong chế độ xem và các mục việc cần làm đã xóa mờ dần khỏi chế độ xem. Nếu các mục việc cần làm được duy trì trong danh sách đã phân loại, thì hoạt ảnh có thể được sử dụng để chuyển một mục ra khỏi danh mục hiện tại và sang một danh mục mới một cách suôn sẻ.

#### SVELTE KHUYẾN KHÍCH KHẢ NĂNG TIẾP CẬN

Svelte cung cấp cảnh báo thời gian chạy cho các vấn đề trợ năng. Ví dụ: imgcác phần tử không có altthuộc tính được gắn cờ. Điều này làm cho nhiều khả năng các ứng dụng Svelte sẽ có thể sử dụng được bởi những người dùng yêu cầu các cách tương tác đặc biệt với trình duyệt web.

### 1.1.2 Xem xét lại khả năng phản ứng

Trong ngữ cảnh của các ứng dụng web, khả năng phản ứng là khả năng DOM được cập nhật tự động để đáp ứng với những thay đổi trong dữ liệu (hay còn gọi là trạng thái). Điều này có thể được so sánh với bảng tính. Việc thay đổi giá trị của một ô có thể khiến các giá trị được hiển thị trong các ô khác thay đổi. Điều này xảy ra khi giá trị của một ô dựa trên giá trị của các ô khác bằng công thức.

Svelte làm cho việc triển khai hoạt động dễ dàng hơn so với các khuôn khổ khác. Nó hỗ trợ một cách duy nhất để quản lý trạng thái của một thành phần dựa vào việc xem các biến cấp cao nhất (được giải thích trong phần 3.9). Nó cũng đơn giản hóa các cách mà trạng thái có thể được chia sẻ trên các thành phần.

DOM HTML

HTML DOM cung cấp sự trình bày trong bộ nhớ của một trang web. Nó bao gồm một cây các đối tượng JavaScript đại diện cho các nút. Có một đối tượng JavaScript đại diện cho toàn bộ Document và nó có các tham chiếu đến các đối tượng DOM khác đại diện cho các phần tử trên trang. Các đối tượng DOM có các phương thức có thể được gọi để lấy thông tin về một nút, thêm các nút con, đăng ký trình nghe sự kiện và hơn thế nữa. Việc sửa đổi DOM sẽ thay đổi những gì trình duyệt hiển thị.

> Bài nói chuyện trong hội nghị “Phản ứng suy nghĩ lại” do Rich Harris đưa ra nhiều lần mô tả rõ ràng những mối quan tâm thúc đẩy việc tạo ra Svelte ( <https://www.youtube.com/watch?v=gJ2P6hGwcgo> )

### 1.1.3 Các vấn đề hiện tại trong Svelte

### 1.1.4 Svelte hoạt động như thế nào?

Hình 1.3 cho thấy vai trò của trình biên dịch Svelte. Giao diện người dùng (UI) các thành phần được triển khai trong .svelte tệp. Chúng có thể chứa mã JavaScript (trong một script phần tử), CSS (trong một style phần tử) và HTML được hiển thị.

![Luồng tệp vào và ra khỏi trình biên dịch Svelte](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9781617297946/files/OEBPS/Images/1-3.png)

Hình 1.3 Luồng tệp vào và ra khỏi trình biên dịch Svelte

.svelte các tệp có thể nhập các .svelte tệp khác để sử dụng như các thành phần con. Ví dụ: một TodoList thành phần đại diện cho toàn bộ ứng dụng Todo có thể nhập và sử dụng một Todo thành phần đại diện cho một mục việc cần làm, có thể với hộp kiểm, văn bản của mục và nút Xóa.

.svelte tệp cũng có thể nhập những thứ như hàm từ .js tệp và từ thư viện của bên thứ ba (thường lấy từ npm). Ví dụ: các hàm từ thư viện Lodash phổ biến có thể được nhập và sử dụng trong ứng dụng Svelte.

Trình biên dịch Svelte biên dịch tất cả những thứ này thành một bundle.js tệp duy nhất và một bundle.css tệp duy nhất. Chúng chỉ chứa mã JavaScript và các quy tắc CSS được sử dụng trong ứng dụng. Chỉ những phần của thư viện Svelte cần thiết mới được đưa vào bundle.js.

Tạo kiểu có thể ảnh hưởng đến bất kỳ thành phần nào được đặt trong global.css tệp. Tệp HTML chính index.html, bao gồm global.css và các tệp gói do trình biên dịch Svelte tạo ra. Tệp HTML này được tải vào trình duyệt web để chạy ứng dụng.

Trình biên dịch Svelte cũng tạo ra bundle.css.map và bundle.js.map các tập tin, hỗ trợ ánh xạ từ mã được tạo sang các dòng nguồn ban đầu. Chúng được sử dụng bởi trình gỡ lỗi, chẳng hạn như những trình gỡ lỗi được tích hợp sẵn trong trình duyệt.

### 1.1.5 Svelte có biến mất không?

Trong hầu hết các khuôn khổ web, mã được cung cấp cho các trình duyệt web để chạy một ứng dụng bao gồm mã do các nhà phát triển viết và một thư viện khuôn khổ. Nếu khuôn khổ triển khai một số lượng lớn các tính năng, thì mã hỗ trợ các tính năng đó thường được phân phối ngay cả khi chỉ một tập hợp con các tính năng thực sự được sử dụng.

Một số người nói rằng Svelte "biến mất" sau khi một ứng dụng được xây dựng. Điều này đề cập đến việc không bao gồm thư viện Svelte trong gói do trình biên dịch Svelte tạo ra. Nhưng một số mã thư viện Svelte được bao gồm.

Thư viện Svelte chủ yếu được định nghĩa bởi các tệp JavaScript trong thư mục node_modules/svelte. Các chức năng chính được xác định trong internal.js, hiện có khoảng 1.400 dòng mã. Các tệp thư viện khác được sử dụng cho các tính năng cụ thể, bao gồm easing.js, và .motion.js register.js store.js transition.js

Như bạn sẽ thấy ở phần sau, các ứng dụng Svelte được biên dịch bằng cách chạy các lệnh npm run dev hoặc npm run build. Chúng tạo ra các tệp trong thư mục public, bao gồm bundle.js và bundle.css. Các chức năng của thư viện Svelte được ứng dụng sử dụng được sao chép lên đầu bundle.js. Đối với các ứng dụng có kích thước vừa và nhỏ (chẳng hạn như ứng dụng Todo), con số này lên tới khoảng 500 dòng mã.

Mã thư viện Svelte không biến mất, nhưng nó rất nhỏ so với các web framework khác.

## 1.2 Svelte so sánh với các web framework khác như thế nào?

Svelte khác với các khung công tác web hiện đang phổ biến khác ở một số điểm. Hãy xem xét một số trong số họ.

### 1.2.1 Angular

Ứng dụng Angular yêu cầu các nhà phát triển viết nhiều mã hơn để hoàn thành các nhiệm vụ tương tự. Mã Svelte là nhiều hơn, tốt, ... nhỏ.

Các khái niệm về góc cạnh hấp dẫn các nhà phát triển Java và C #, những người đã quen với việc viết nhiều lớp và sử dụng chèn phụ thuộc.

Ứng dụng Angular thường sử dụng “hiệu ứng” và các thư viện như RxJS và ngrx / store. Những điều này làm tăng thời gian cần thiết để thành thạo Angular.

### 1.2.2 React

Các thành phần React sử dụng JSX (viết tắt của JavaScript XML) để mô tả những gì nên được hiển thị. JSX là một phần mở rộng cho cú pháp JavaScript trông giống như HTML. React chuyển đổi điều này thành các lệnh gọi hàm tạo ra các nút DOM. Mặc dù JSX rất giống với HTML, nhưng vẫn có những điểm khác biệt. Một số nhà phát triển không thích JSX vì họ không thích trộn nó vào mã JavaScript của họ. Trong khi các thành phần của Svelte xác định JavaScript, CSS và HTML của chúng trong cùng một tệp, chúng được chỉ định trong các phần riêng biệt của tệp.

React sử dụng DOM ảo. Các vấn đề với điều này đã được mô tả trước đó.

Số lượng các khái niệm phải nắm được để sử dụng thành thạo React tiếp tục tăng lên. Ví dụ, móc câu là một chủ đề lớn và có rất nhiều chủ đề khác để học. Có nhiều cách để xử lý trạng thái, bao gồm this.setStatehook useState, Redux, và nhiều cách khác. Về phía chân trời, chúng tôi có Chế độ hồi hộp và đồng thời. Svelte dễ học hơn nhiều.

### 1.2.3 Vue

Các thành phần Vue 2 được mô tả bằng các ký tự đối tượng. Những điều này mô tả nhiều điều về một thành phần, bao gồm các đạo cụ mà nó chấp nhận, các thuộc tính được tính toán (dựa trên các thành phần khác), dữ liệu được sử dụng (trạng thái thành phần), các hàm đồng hồ (để phản ứng với các thay đổi trạng thái) và các phương thức (chẳng hạn như xử lý sự kiện).Các thành phần của mã trong Vue 2 sử dụng this từ khóa thường xuyên và một số nhà phát triển cảm thấy điều này làm cho mã khó hiểu hơn. Nó cũng làm cho mã dài hơn. Vue 3 thành phần được mô tả với các chức năng. Ngoài ra, Vue sử dụng DOM ảo và các vấn đề với điều này đã được mô tả trước đó.

Nhưng với các thành phần của Svelte, tất cả những thứ này được xác định bằng cách sử dụng các biến và hàm JavaScript thuần túy với sự trợ giúp của các câu lệnh phản ứng (được mô tả trong chương tiếp theo).

#### Bản tóm tắt

- Svelte là một công cụ để xây dựng các ứng dụng web thay thế cho các khuôn khổ web phổ biến hiện nay như React, Vue và Angular.

- Svelte là một trình biên dịch ứng dụng web, không phải là một thư viện.

- Svelte có nhiều tính năng khiến nó trở thành một lựa chọn hấp dẫn, chẳng hạn như viết ít mã hơn, tạo các gói nhỏ hơn (giúp cải thiện thời gian khởi động) và đơn giản hóa việc quản lý trạng thái.

- Sapper xây dựng trên Svelte, bổ sung thêm nhiều tính năng như định tuyến trang, hiển thị phía máy chủ, tách mã và tạo trang web tĩnh.

- Svelte Native sử dụng các tính năng của Svelte để cung cấp một giải pháp thay thế cho React Native để xây dựng các ứng dụng di động Android và iOS.


