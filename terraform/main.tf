provider "aws" {
    region = "us-east-2"
}

resource "aws_instance" "My_server" {
   ami = "ami-02f3416038bdb17fb"
   instance_type = "t2.micro"
   vpc_security_group_ids = [aws_security_group.My_segurity_group.id]

   user_data = <<-EOF
               #!/bin/bash
               echo "Hi CodeFactory!" > index.html
               nohup busybox httpd -f -p 8080 &
               EOF 

    tags = {
      "Name" = "terraform_app"
    }
}

resource "aws_security_group" "My_segurity_group" {
  name = "my-server-terraform-sg"

  ingress  {
    cidr_blocks = [ "0.0.0.0/0" ]
    description = "Access to port 8080 from the outside"
    from_port   = 8080
    to_port     = 8080
    protocol    = "TCP"
  } 
}
  
